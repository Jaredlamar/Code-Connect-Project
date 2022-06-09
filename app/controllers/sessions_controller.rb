class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create, :login]

    def login
        user = User.find_by(username:params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: { error: "Invalid Password and/or Username" },  status: :unauthorized
        end
    end    

    def logout
        session.delete :current_user
    end 
end
