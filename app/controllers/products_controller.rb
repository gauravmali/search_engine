class ProductsController < ApplicationController

  def search
    query = search_params[:value]
    if query
      @products = Product.search(query).page(search_params[:page] || 1).per(10)
      @countries_array = @products.to_a.map {|i| i.country}.uniq
    end
    render 'search'
  end

  private

    def search_params
      params.permit(:value, :page, {})
    end
end
