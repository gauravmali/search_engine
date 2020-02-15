Rails.application.routes.draw do
  root 'products#search'

  resources :products do
    collection do
      get :search
    end
  end
end
