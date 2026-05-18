# WEB103 Prework - Creatorverse

Submitted by: Matthew Floresca Tom

About this web app: **Creatorverse is a full-stack-style React app for discovering and managing favorite content creators! Users can browse a card-based homepage, view creator profiles, and perform full CRUD operations (create, read, update, delete) backed by a Supabase PostgreSQL database. Each creator includes a name, channel URL, description, and an optional profile image.**

Time spent: 12 hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [x] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [x] Optional `imageURL` field on creators with letter-placeholder fallback when no image is provided
* [x] React Router with dedicated routes for list, detail, add (`/new`), and edit (`/edit/:id`)
* [x] Supabase integration with seed SQL script (`supabase/schema.sql`) including six sample creators
* [x] Delete confirmation dialogs on homepage cards and detail page
* [x] Empty-state messaging when no creators exist
* [x] Environment variable support (`.env`) for Supabase URL and anon key

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with ...  👉🏿 GIF tool here

<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Some challenges I had developing the app include Supabase setup and documentation, as well as React routing. 

The app uses the Supabase JavaScript client, which wraps `fetch()` under the hood—all data access uses `async/await`. Setting up Row Level Security policies in Supabase was required so the anon key could read and write the `creators` table. Column names use camelCase (`imageURL`), so the SQL schema quotes that column name. After running `supabase/schema.sql`, copy project URL and anon key into `.env` (see `.env.example`) before starting the dev server with `npm run dev`.

## License

Copyright 2026 Matthew Floresca Tom

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
