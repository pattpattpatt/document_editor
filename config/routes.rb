Rails.application.routes.draw do
  get 'documents', to: 'documents#index'
  post 'documents/create'
  get 'documents/show/:id', to: 'documents#show'
  root 'homepage#index'
  # get '/*path' => 'homepage#index'
end
