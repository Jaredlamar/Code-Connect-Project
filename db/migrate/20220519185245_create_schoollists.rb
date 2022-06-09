class CreateSchoollists < ActiveRecord::Migration[6.1]
  def change
    create_table :schoollists do |t|
      t.integer :user_id
      t.integer :school_id

      t.timestamps
    end
  end
end
