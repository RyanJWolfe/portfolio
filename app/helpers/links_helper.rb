module LinksHelper
  def social_links
    [
      { name: "github", url: "https://github.com/RyanJWolfe" },
      { name: "linkedin", url: "https://www.linkedin.com/in/ryan-wolfe-64652a115/" },
      { name: "instagram", url: "https://www.instagram.com/theryanwolfe/" },
      { name: "mail", url: "mailto:me@ryanjwolfe.com" }
    ]
  end

  def contact_path
    about_path(anchor: "contact")
  end
end
