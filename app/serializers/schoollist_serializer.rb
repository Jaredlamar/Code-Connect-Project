class SchoollistSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :school_id
end
