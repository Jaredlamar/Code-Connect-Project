class CreateSchools < ActiveRecord::Migration[6.1]
  def change
    create_table :schools do |t|
      t.string :name
      t.string :logo
      t.string :email
      t.string :link

      t.timestamps
    end
  end
end
