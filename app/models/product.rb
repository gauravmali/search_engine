class Product < ApplicationRecord
  include Elasticsearch::Model
  include Elasticsearch::Model::Callbacks

  settings do
    mappings dynamic: false do
      indexes :title, type: :text, analyzer: :english
      indexes :description, type: :text, analyzer: :english
      indexes :country, type: :text, analyzer: :english
      indexes :tags, type: :text, analyzer: :english
      indexes :price, type: :text, analyzer: :english
    end
  end
end
