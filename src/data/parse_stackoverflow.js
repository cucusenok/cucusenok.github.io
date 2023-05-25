const groups = [
    {
        name: "frontend",
    },
    {
        name: "backend",
    },
];

/*
SELECT TagName
from Tags
where Id = 3



SELECT Tags.TagName, Tags.Id
FROM Tags
JOIN
    (
     SELECT DISTINCT top 10 PostTags.TagId
        FROM  PostTags
        JOIN
        (
          SELECT TOP 10
          PostTags.PostId
          FROM PostTags WHERE TagId=@relatedTagId
        ) AS a
        ON PostTags.PostId = a.PostId
    ) AS b
ON Tags.Id = b.TagId


 */