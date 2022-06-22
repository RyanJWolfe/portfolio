# frozen_string_literal: true

class Contact < MailForm::Base
  attribute :name, validate: true
  attribute :email, validate: URI::MailTo::EMAIL_REGEXP
  attribute :message, validate: true
  attribute :nickname, captcha: true # hidden field used to prevent bots from submitting the form

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      subject: 'Contact Form Inquiry',
      to: ENV['CONTACT_EMAIL_RECIPIENT'],
      from: %("#{name}" <#{email}>)
    }
  end
end
