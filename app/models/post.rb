# frozen_string_literal: true

class Post
  POSTS_DIR = Rails.root.join("app", "content", "posts")

  attr_reader :title, :date, :slug, :description, :author, :tags

  def initialize(attrs)
    @title = attrs[:title]
    @date = attrs[:date]
    @slug = attrs[:slug]
    @description = attrs[:description]
    @author = attrs[:author]
    @tags = attrs[:tags]
  end

  def self.all
    Dir.glob("#{POSTS_DIR}/*.md").map do |file|
      front_matter = FrontMatterParser::Parser.parse_file(
        file,
        loader: FrontMatterParser::Loader::Yaml.new(allowlist_classes: [ Date ])
      )
      new(
        title: front_matter["title"],
        date: front_matter["date"],
        slug: front_matter["slug"],
        description: front_matter["description"],
        author: front_matter["author"],
        tags: front_matter["tags"]
      )
    end.compact
  end
end
