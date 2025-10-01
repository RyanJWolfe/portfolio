class BlogController < ApplicationController
  before_action :set_posts, only: [ :index ]

  def index
  end

  def show
  end

  private

  def set_posts
    @posts = Post.all.sort_by { |post| post.date }.reverse
  end
end
