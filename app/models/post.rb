# frozen_string_literal: true

class Post
  POSTS_DIR = Rails.root.join("app", "content", "posts")

  attr_reader :content, :front_matter

  def initialize(attrs)
    @front_matter = attrs[:front_matter]
    @content = attrs[:content]
  end

  def title
    front_matter[:title]
  end

  def date
    front_matter[:date]
  end

  def slug
    front_matter[:slug]
  end

  def description
    front_matter[:description]
  end

  def author
    front_matter[:author]
  end

  def tags
    front_matter[:tags]
  end

  def html_content
    renderer = Redcarpet::Markdown.new(Redcarpet::Render::HTML.new(with_toc_data: true),
                                       fenced_code_blocks: true,
                                       autolink: true)
    renderer.render(content)
  end

  def self.from_file(file_path)
    return nil unless File.exist?(file_path)

    parsed_file = FrontMatterParser::Parser.parse_file(
      file_path,
      loader: FrontMatterParser::Loader::Yaml.new(allowlist_classes: [ Date ])
    )

    new(content: parsed_file.content, front_matter: parsed_file.front_matter.symbolize_keys)
  end

  def self.all
    Dir.glob("#{POSTS_DIR}/*.md").map do |file|
      from_file(file)
    end.compact
  end

  def self.find_by_slug(slug)
    file_path = POSTS_DIR.join("#{slug}.md")
    from_file(file_path)
  end
end
