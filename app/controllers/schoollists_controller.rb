class SchoollistsController < ApplicationController
    def index
        current_user = User.find(params[:user_id])
        # booklists = Booklist.includes(:book).all
        schoollists = current_user.schoollists.includes(:school)
        render json: schoollists.to_json(include: [:school])
    end

    def show
        schoollist = Schoollist.find(params[:id])
        render json: schoollist 
    end

    def create 
        schoollist = Schoollist.create(school_id: params[:school_id], user_id: params[:user_id])
        render json: schoollist.to_json(include: [:school]), status: :created
    end

    def destroy
        schoollist = Schoollist.find(params[:id])
        schoollist.destroy
        head :no_content
    end

    private 

    def schoollists_params
        
        params.require(:schoollist).permit(:user_id)

    end

    def book_params
        params.require(:school).permit(:name, :logo, :email, :link,)
    end

end
