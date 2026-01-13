import Handlebars from 'handlebars';

import inputTemplate from '@components/Input/Input.hbs?raw';
import buttonTemplate from '@components/Button/Button.hbs?raw';
import chatListTemplate from '@components/chat-list/chat-list.hbs?raw';
import chatItemTemplate from '@components/chat-list/chat-item.hbs?raw';
import messageListTemplate from '@components/message-list/message-list.hbs?raw';
import messageItemTemplate from '@components/message-list/message-item.hbs?raw';
// import chatPreviewTemplate from '@components/chat/chat-preview.hbs?raw';
import chatPreviewTemplate from '@partials/chat-preview.hbs?raw';
import chatHeaderTemplate from '@partials/chat-header.hbs?raw';
import chatSidebarTemplate from '@partials/chat-sidebar.hbs?raw';
import chatInputTemplate from '@partials/chat-input.hbs?raw';
import chatMessagesTemplate from '@partials/chat-messages.hbs?raw';
import profileSidebarTemplate from '@partials/profile-sidebar.hbs?raw';
import mainTemplate from '@partials/main.hbs?raw';


export const registerHandlebarsPartials = (): void => {
  Handlebars.registerPartial('input', inputTemplate);
  Handlebars.registerPartial('button', buttonTemplate);
  Handlebars.registerPartial('chat-list', chatListTemplate);
  Handlebars.registerPartial('chat-item', chatItemTemplate);
  Handlebars.registerPartial('message-list', messageListTemplate);
  Handlebars.registerPartial('message-item', messageItemTemplate);
  Handlebars.registerPartial('chat-preview', chatPreviewTemplate);
  Handlebars.registerPartial('chat-header', chatHeaderTemplate);
  Handlebars.registerPartial('chat-sidebar', chatSidebarTemplate);
  Handlebars.registerPartial('chat-input', chatInputTemplate);
  Handlebars.registerPartial('chat-messages', chatMessagesTemplate);
  Handlebars.registerPartial('profile-sidebar', profileSidebarTemplate);
  Handlebars.registerPartial('main', mainTemplate);
};
