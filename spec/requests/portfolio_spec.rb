require 'rails_helper'

RSpec.describe "Portfolios", type: :request do
  describe "GET /new" do
    it "returns http success" do
      get "/portfolio/new"
      expect(response).to have_http_status(:success)
    end
  end

end
