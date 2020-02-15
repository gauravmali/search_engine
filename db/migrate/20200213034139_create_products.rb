class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title
      t.string :description
      t.string :country
      t.string :tags
      t.string :price

      t.timestamps
    end
  end
end
