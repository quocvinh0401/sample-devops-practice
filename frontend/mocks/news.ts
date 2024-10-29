import { NewsItem } from "@/libraries/type";
import { Builder } from "builder-pattern";

export const categories = ["All", "Technology", "UX/UI", "Marketing"];

export const fakeNewsContent =
    '<img src="https://images.idgesg.net/images/idge/imported/imageapi/2023/10/29/11/macworld-apple-macbook-air-1322-2015-i5-1.6ghz-8gb-ram-128gb-silver-refurbished-1-100947850-large.jpg?auto=webp&amp;quality=85,70" alt="Apple, MDM, Mac, iPhone, iPad,, Vision, Kandji"><p><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.</p><p></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.</p><p></p><h2>Key Features</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.</p><p></p><ul><li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.</p></li></ul><img src="https://images.idgesg.net/images/idge/imported/imageapi/2023/10/29/11/macworld-apple-macbook-air-1322-2015-i5-1.6ghz-8gb-ram-128gb-silver-refurbished-1-100947850-large.jpg?auto=webp&amp;quality=85,70" alt="Apple, MDM, Mac, iPhone, iPad,, Vision, Kandji"><p></p><h2>Feedback and Improvement</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.</p>';

export const news: NewsItem[] = [
    Builder<NewsItem>()
        .id(1)
        .background("/images/temp/news-1.png")
        .title("The Insider’s Guide to Hiring Business Software Consultants")
        .createdAt(new Date())
        .category(categories[3])
        .content(fakeNewsContent)
        .build(),
    Builder<NewsItem>()
        .id(2)
        .background("/images/temp/news-2.png")
        .title("The Insider’s Guide to Hiring Business Software Consultants")
        .createdAt(new Date())
        .category(categories[1])
        .content(fakeNewsContent)
        .build(),
    Builder<NewsItem>()
        .id(3)
        .background("/images/temp/news-3.png")
        .title("The Insider’s Guide to Hiring Business Software Consultants")
        .createdAt(new Date())
        .category(categories[2])
        .content(fakeNewsContent)
        .build(),
];
