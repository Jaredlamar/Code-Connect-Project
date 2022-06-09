Rails.application.routes.draw do
  
  resources :comments
  resources :posts
  resources :schoollists
  resources :schools
  resources :booklists
  resources :books, only: [:index, :show, :create, :update, :destroy]
  resources :users, only: [:show, :create, :update, :destroy]
  post '/signup', to: 'users#create'

  post '/login', to: 'sessions#login'
  delete '/logout', to: 'sessions#logout'
 
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
