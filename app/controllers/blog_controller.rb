class BlogController < ApplicationController
  before_action :set_posts, only: [ :index ]

  def index
  end

  def show
  end

  private

  def set_posts
    posts_dir = Rails.root.join("app", "content", "posts")
    posts = Dir.glob("#{posts_dir}/*.md").map do |file|
      front_matter = FrontMatterParser::Parser.parse_file(
        file,
        loader: FrontMatterParser::Loader::Yaml.new(allowlist_classes: [ Date ]))
      {
        title: front_matter["title"],
        date: front_matter["date"],
        slug: front_matter["slug"],
        description: front_matter["description"],
        author: front_matter["author"],
        tags: front_matter["tags"]
      }
    end.compact

    @posts = posts.sort_by { |post| post[:date] }.reverse
  end
end
