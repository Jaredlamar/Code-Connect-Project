class SchoolsController < ApplicationController
    def index
        schools = School.all
        render json: schools
    end

    def show 
        school = School.find(params[:id])
        render json: school
    end

    def create
        school = School.create!(school_params)
    end

    def destroy
        school = School.find(params[:id])
        school.destroy
        head :no_content
    end

    private

    def school_params
        params.permit(:name, :logo, :email, :link)
    end
end
