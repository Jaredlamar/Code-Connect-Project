class PostSerializer < ActiveModel::Serializer
  attributes :id, :event, :date, :image, :comments
end
