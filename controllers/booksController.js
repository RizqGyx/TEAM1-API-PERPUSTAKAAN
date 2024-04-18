const { Model, Op, where } = require("sequelize");
const {Book, Rack, User} = require("../models")
const apiError = require("../utils/apiError");
const book = require("../models/book");
const auth = require("../models/auth");
const imagekit = require("../lib/imagekit");

// function
const updateData = async (bodyFromReq, img, bodyFromDB) => {
    return {
        title: bodyFromReq.title || bodyFromDB.title, 
        genre: bodyFromReq.genre || bodyFromDB.genre, 
        author: bodyFromReq.author || bodyFromDB.author, 
        language: bodyFromReq.language || bodyFromDB.language, 
        publicationYear: bodyFromReq.publicationYear || bodyFromDB.publicationYear, 
        publisher: bodyFromReq.publisher || bodyFromDB.publisher, 
        imageCover: img,
        numOfBooks: bodyFromReq.numOfBooks || bodyFromDB.numOfBooks, 
        numBorrowed: bodyFromReq.numBorrowed || bodyFromDB.numBorrowed, 
        rackId: bodyFromReq.rackId || bodyFromDB.rackId,
        createdAt: bodyFromDB.createdAt,
        updatedAt: new Date()
    }

}
// -----

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
      
        const totalPages = Math.ceil(count / limit);    
        res.status(200).json({
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
        const {
            title, 
            genre, 
            author,
            language,
            publicationYear,
            publisher,
            numOfBooks,
            numBorrowed,
            rackId
        } = req.body

        const checkRack = await Rack.findOne({
            where: {
                id:{
                    [Op.eq]: rackId
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

        const newBook = await Book.create({
            title,
            genre,
            author,
            language,
            publicationYear,
            publisher,
            imageCover: image,
            numOfBooks,
            numBorrowed,
            rackId
        })

        res.status(200).json({
            status: "success",
            book: newBook
        })
    } catch (error) {
        next(new apiError(error.message, 400))
    }
}

const updateBookData = async (req, res, next) => {
    try {
      const id = req.params.id;
      const files = req.files;
      let uploadedImageUrls;
  
      const checkId = await Book.findOne({
        where: {id: id},
        include: ["Rack"]
      });

      if (!checkId) return next(new apiError(`Book with ID ${id} not found.`));
      if(checkId.Rack.id !== req.user.libraryId) return next(new apiError(`Sorry but you dont have access in this library`, 400  ))
      
  
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
  
      const updatedBookData = await updateData(req.body, uploadedImageUrls, checkId);
      const updatedBook = await checkId.update(updatedBookData);
  
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

        res.status(200).json({
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

        if(!book) next(new apiError(`Cant find book with id: ${id}`))
        if(book.Rack.id !== req.user.libraryId) return next(new apiError(`Sorry but you dont have access in this library`, 400))

        await book.destroy()

        res.status(200).json({
            status: "success",
            message: "Book has been deleted"
        })
    } catch (error) {
        next(new apiError(error.message, 400))
    }
    
}

module.exports = {findBooksById, filterBooks, deleteBookById, findAll, createNewBooks, updateBookData}