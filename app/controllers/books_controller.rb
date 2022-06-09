class BooksController < ApplicationController

    def index
        books = Book.all
        render json: books
    end

    def show 
        book = Book.find(params[:id])
        render json: book
    end

    def create
        book = Book.create!(book_params)
    end

    def destroy
        book = Book.find(params[:id])
        book.destroy
        head :no_content
    end


    private 

    def book_params
        params.permit(:title, :author, :image, :published, :link)
    end
end
