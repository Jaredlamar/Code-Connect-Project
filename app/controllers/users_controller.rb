class UsersController < ApplicationController

    skip_before_action :authorize, only: [:show, :create]


    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end 

      def create
        user = User.create!(user_params)
        # session[:user_id] = user.id
        if user.valid?
        render json: user, status: :created
        else

            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end    
    end

    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :created
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        head :no_content
    end

    private 

    def user_params
        params.permit(:username, :password)
    end 
end
