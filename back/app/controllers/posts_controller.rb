class PostsController < ApplicationController
    def index
        @posts = Post.all.order(created_at: :desc)
        render json: @posts
    end

    def create
        @post = Post.create(name: params[:name], description: params[:description])
        render json: @post
    end

    def destroy
        @post = Post.find(params[:id])
        @post.destroy
        render json: @post
    end
end
