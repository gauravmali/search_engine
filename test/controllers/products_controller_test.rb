require 'test_helper'

class ProductsControllerTest < ActionController::TestCase
  test "should render the search page if the product is present" do
    get(:search, params: { value: 'MyString', page: 1})
    assert_template :search
  end

  test "should render the search page even if the product is not present" do
    get(:search, params: { value: 'WRONG', page: 1})
    assert_template :search
  end
end
