# frozen_string_literal: true

Rails.application.routes.draw do
  root "pages#index"
  get "/about", to: "pages#about"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#new"

  # Contact form routes, not currently in use
  get "/contact", to: "contacts#new"
  get "/contact/success", to: "contacts#index"
  post "/contact", to: "contacts#create"
end
