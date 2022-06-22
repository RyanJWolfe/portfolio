class ContactsController < ApplicationController
  def index
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(contacts_params)

    if @contact.valid?
      deliver_message
    else
      flash[:error] = 'Unable to send message.'
      respond_to do |format|
        format.html { render :index, status: :unprocessable_entity }
        format.json { render json: @contact.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def deliver_message
    @contact.request = request
    if @contact.deliver
      flash.now[:success] = 'Message sent!'
      render :index
    else
      flash.now[:error] = 'Could not send message'
      render :index
    end
  end

  def contacts_params
    params.require(:contact).permit(:name, :email, :message, :nickname)
  end
end
