class SchoolSerializer < ActiveModel::Serializer
  attributes :id, :name, :logo, :email, :link
end
