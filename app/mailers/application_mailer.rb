# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: ENV["CONTACT_EMAIL_RECIPIENT"]
  layout "mailer"
end
