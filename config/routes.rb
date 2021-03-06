# frozen_string_literal: true

Rails.application.routes.draw do
  root 'portfolio#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#new"
  get '/contact', to: 'contacts#new'
  get '/contact/success', to: 'contacts#index'
  post '/contact', to: 'contacts#create'
end
