class BookSerializer < ActiveModel::Serializer
  attributes :id, :author, :title, :image, :published, :link
end
