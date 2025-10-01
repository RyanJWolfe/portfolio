# frozen_string_literal: true

Rails.application.routes.draw do
  root "pages#index"

  get "/blog", to: "blog#index"
  get "/blog/:slug", to: "blog#show", as: :blog_post

  get "/about", to: "pages#about"

  get "/contact", to: "contacts#new"
  get "/contact/success", to: "contacts#index"
  post "/contact", to: "contacts#create"
end
