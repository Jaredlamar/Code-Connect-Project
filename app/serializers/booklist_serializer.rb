class BooklistSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :book_id
end
