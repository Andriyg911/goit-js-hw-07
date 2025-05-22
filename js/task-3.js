.галерея {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
}

.gallery-item {
  flex: 1 1 calc(33.33% - 10px);
  max-width: calc(33.33% - 10px);
}

.gallery-image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
}