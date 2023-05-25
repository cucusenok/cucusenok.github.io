DECLARE @relatedTagId int;
DECLARE @relatedTagId2 int;


SET @relatedTagId = (SELECT Id
  FROM Tags WHERE TagName='frontend');

SET @relatedTagId2 = (SELECT Id
  FROM Tags WHERE TagName='backend');




SELECT frontTagName, frontTagId, backTagId, front_count, back_count
FROM (
    SELECT Tags.TagName as frontTagName, Tags.Id as frontTagId, front_count
    FROM Tags
    JOIN
        (
         SELECT tmp.TagId, count(tmp.TagId) as front_count
      FROM (SELECT top 100000 PostTags.TagId
            FROM  PostTags
            JOIN
            (
              SELECT TOP 100000
              PostTags.PostId
              FROM PostTags WHERE TagId=@relatedTagId
            ) AS a
            ON PostTags.PostId = a.PostId) as tmp
            GROUP by tmp.TagId
         ) AS b
    ON Tags.Id = b.TagId
    ) as FrontTable
INNER JOIN (
    SELECT Tags.TagName as backTagName, Tags.Id as backTagId, back_count
    FROM Tags
    JOIN
        (
         SELECT tmp.TagId, count(tmp.TagId) as back_count
         FROM (SELECT top 100000 PostTags.TagId
            FROM  PostTags
            JOIN
            (
              SELECT TOP 100000
              PostTags.PostId
              FROM PostTags WHERE TagId=@relatedTagId2
            ) AS a
            ON PostTags.PostId = a.PostId) as tmp
        GROUP by tmp.TagId
         ) AS b
    ON Tags.Id = b.TagId
    ) as BackTable
ON frontTagId = backTagId


