
# authentication.rb
module Precious
  class App < Sinatra::Base
    use Rack::Auth::Basic, "not your Area" do |username, password|
      [username, password] == ['ne0admin', 'ne0password']
    end
  end
end
