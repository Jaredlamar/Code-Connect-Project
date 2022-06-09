class Book < ApplicationRecord
    has_many :booklists
    has_many :users, through: :booklists
end
