class PostsController < ApplicationController
    def index
        # current_user=User.find(params[:user_id])
        posts = Post.all.includes(:comments).order("created_at DESC")
        render json: posts.map{|post|PostSerializer.new(post).as_json}, status: :ok
    end

    def show
        post = Post.find(params[:id])
        render json: post
    end

    def create
        post = Post.create!(post_params) 
        render json: post.to_json
    end

    def update
        post = Post.find(params[:id])
        post.update!(post_params) 
        render json: post.to_json
    end

    def destroy
        post = Post.find(params[:id])
        post.destroy
        head :no_content
    end

    private

    def post_params
        params.require(:post).permit(:event, :date, :user_id, :image)
    end

end
