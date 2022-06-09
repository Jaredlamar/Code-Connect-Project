class BooklistsController < ApplicationController
    def index
        current_user = User.find(params[:user_id])
        # booklists = Booklist.includes(:book).all
        booklists = current_user.booklists.includes(:book)
        render json: booklists.to_json(include: [:book])
    end

    def show
        booklist = Booklist.find(params[:id])
        render json: booklist 
    end

    def create 
        booklist = Booklist.create(book_id: params[:book_id], user_id: params[:user_id])
        render json: booklist.to_json(include: [:book]), status: :created
    end

    def destroy
        booklist = Booklist.find(params[:id])
        booklist.destroy
        head :no_content
    end

    private 

    def booklists_params
        
        params.require(:booklist).permit(:user_id)

    end

    def book_params
        params.require(:book).permit(:title, :author, :image, :published, :link,)
    end

end
