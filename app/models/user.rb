class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    has_many :booklists
    has_many :books, through: :booklists
    has_many :schoollists
    has_many :schools, through: :schoollists
    has_many :posts
    has_many :comments, through: :posts
end
