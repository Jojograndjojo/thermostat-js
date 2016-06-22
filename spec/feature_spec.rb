require 'spec_helper'


feature 'it presses an up button' do
  scenario 'user visits homepage' do
    visit('/')
    expect(page.has_button?('up')).to eq(true)
  end
end

feature 'it presses an up button' do
  scenario 'user visits homepage' do
    visit('/')
    expect(page.has_button?('down')).to eq(true)
  end
end

feature 'it presses an up button' do
  scenario 'user visits homepage' do
    visit('/')
    expect(page.has_button?('reset')).to eq(true)
  end
end

feature 'it presses an up button' do
  scenario 'user visits homepage' do
    visit('/')
    expect(page.has_button?('on')).to eq(true)
  end
end

feature 'it presses an up button' do
  scenario 'user visits homepage' do
    visit('/')
    expect(page.has_button?('off')).to eq(true)
  end
end
