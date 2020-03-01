class DocumentsController < ApplicationController
  def index
    documents = Document.all.order(created_at: :desc)
    render json: documents
  end

  def create
  end

  def show
  end
end
