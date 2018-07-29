CREATE TABLE IF NOT EXISTS article_category
(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  article_id INT NOT NULL,
  FOREIGN KEY (article_id) REFERENCES article(id),
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category(id)
)
