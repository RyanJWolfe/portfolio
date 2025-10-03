class BlogController < ApplicationController
  before_action :set_posts, only: [ :index ]

  def index
  end

  def show
    @post = Post.find_by_slug(params[:slug])
    render plain: "Post not found", status: :not_found and return unless @post

    @content = @post.html_content
  end

  private

  def set_posts
    @posts = Post.all.sort_by { |post| post.date }.reverse
  end
end
