const { Model, Op, where } = require("sequelize");
const {Book, Rack, User} = require("../models")
const apiError = require("../utils/apiError");
const imagekit = require("../lib/imagekit");
const validator = require("../middlewares/validator/bookValidator")

const filterBooks = async (req, res, next) => {
    try {
        const page = parseInt(req.query.page) - 1 || 0; 
        const limit = parseInt(req.query.limit) || 1;
        const {search, genre, author, title} = req.query;
        
        // search filter
        let filterCondition = {}

        // universal filter
        if(search)filterCondition = {
            [Op.or]: [
              { title: { [Op.iLike]: `%${search}%` } },
              { genre: { [Op.iLike]: `%${search}%` } }, 
              { author: { [Op.iLike]: `%${search}%` } }
            ]
          };
        // specific filter
        if(genre)filterCondition.genre = { [Op.iLike]: `%${genre}%`};
        if(title)filterCondition.title = {[Op.iLike]: `%${title}%`};
        if(author)filterCondition.author = {[Op.iLike]: `%${author}%`};

        const { count, rows: book } = await Book.findAndCountAll({
            where: filterCondition,
            offset: page * limit,
            limit: limit,
          });
        
        if(count == 0) return next(new apiError("Book Not Found", 404))
      
        const totalPages = Math.ceil(count / limit);    
        res.status(201).json({
            message: "Success",
            data: {
                TotalData: count,
                totalPages,
                limit
            },
            Book: book
        })
    } catch (error) {
        next(new apiError(error.message, 400))
    }
}

const createNewBooks = async (req, res, next) => {
    try {

        const {error, value} =  validator.validateCreateBook(req.body)
        if(error) next(new apiError(error, 400))
        
        const checkRack = await Rack.findOne({
            where: {
                id:{
                    [Op.eq]: value.rackId
                }}
        })

        // check if the staff have access
        if(req.user.role == "Staff"){
            if(checkRack.libraryId !== req.user.libraryId){
                return next(new apiError("Sorry but you dont have access in this library"))
            }
        }
        
        const files = req.files
        let image
        if(files){
            await Promise.all(
                files.map(async (file) => {
                    const split = file.originalname.split(".");
                    const extension = split[split.length - 1];

                    const uploadImg = await imagekit.upload({
                        file: file.buffer,
                        fileName: `file_${crypto.randomUUID()}.${extension}`
                    })
                    image = uploadImg.url
                })
            )
        }

        value.imageCover = image
        const newBook = await Book.create(value)

        res.status(201).json({
            status: "Success",
            book: newBook
        })
    } catch (error) {
        next(new apiError(error.message, 400))
    }
}

const updateBookData = async (req, res, next) => {
    try {
      const id = req.params.id;
      const files = req.files   ;
      let uploadedImageUrls;
      console.log(req.body)
  
      const {error, value} =  validator.validateUpdateBook(req.body)
        if(error) next(new apiError(error, 400))  

      const checkId = await Book.findOne({
        where: {id: id},
        include: ["Rack"]
      });

      if (!checkId) return next(new apiError(`Book with ID ${id} not found.`));
      if(req.user.role == "Staff"){
        if(checkId.Rack.libraryId !== req.user.libraryId) return next(new apiError("Sorry but you dont have access in this library"))
      }      
      
      if (files) {
        await Promise.all(
          files.map(async (file) => {
            const split = file.originalname.split(".");
            const extension = split[split.length - 1];
            const uploadImg = await imagekit.upload({
              file: file.buffer,
              fileName: `file_${crypto.randomUUID()}.${extension}`,
            });
            uploadedImageUrls = uploadImg.url;
          })
        );
      } else {
        uploadedImageUrls = checkId.imageCover; 
      }

      value.imageCover = uploadedImageUrls
      console.log(value.imageCover)
      const updatedBook = await checkId.update(value);
  
      res.status(200).json({
        status: "Success",
        data: updatedBook,
      });
    } catch (error) {
      next(new apiError(error.message, 400));
    }
  };

const findAll = async (req, res, next) => {
    const books = await Book.findAll()
    res.status(200).json({
        data: books
    })
}

const findBooksById = async (req, res, next) => {
    try {
        const book = await Book.findByPk(req.params.id, {
            include: ['Rack']
        });
        console.log(book.rackId)

        res.status(201).json({
            status: "Success",
            data: {
                books: book,
                rack: Rack
            },
          });
        
    } catch (error) {
        next(new apiError("Book not found", 404))
    }
}

const deleteBookById = async (req, res, next) => {
    try {
        const { id } = req.params

        // check in database if there any book that have id === id
        const book = await Book.findOne({
            where: {id: id},
            include: ["Rack"]
        });

        if(!book) next(new apiError(`Cant find book with ID: ${id}`))
        if(book.Rack.id !== req.user.libraryId) return next(new apiError(`Sorry but you dont have access in this library`, 400))

        await book.destroy()

        res.status(200).json({
            status: "Success",
            message: "Book has been deleted"
        })
    } catch (error) {
        next(new apiError(error.message, 400))
    }
    
}

module.exports = {findBooksById, filterBooks, deleteBookById, findAll, createNewBooks, updateBookData}