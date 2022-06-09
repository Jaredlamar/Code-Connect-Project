class CommentsController < ApplicationController
    def create
        post = Post.find(params[:post_id])
        comment = post.comments.create(content: params[:content], user_id: params[:user_id])
        render json: comment.to_json
    end

    def index  
        post = Post.find(params[:post_id])
        comments = post.comments.where(user_id: params[:user_id])

        render json: comments.to_json
    end
end
