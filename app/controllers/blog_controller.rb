class BlogController < ApplicationController
  before_action :set_posts, only: [ :index ]

  def index
  end

  def show
    slug = params[:slug]
    file_path = Post::POSTS_DIR.join("#{slug}.md")

    render plain: "Post not found", status: :not_found and return unless File.exist?(file_path)


    @post = Post.from_file(file_path)
    renderer = Redcarpet::Markdown.new(Redcarpet::Render::HTML, fenced_code_blocks: true)
    @content = renderer.render(@post.content)
  end

  private

  def set_posts
    @posts = Post.all.sort_by { |post| post.date }.reverse
  end
end
