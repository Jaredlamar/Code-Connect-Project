class School < ApplicationRecord
    has_many :schoollists
    has_many :users, through: :schoollists
end
