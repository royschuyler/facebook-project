'use strict';

angular.module('facebook-project').factory('Person', function ($http, API_URL) {
  return {
    getOne: function getOne(id, cb) {
      $http.get('' + API_URL + '/people/' + id + '.json').success(cb);
    },

    getAll: function getAll(cb) {
      $http.get('' + API_URL + '/people.json').success(cb);
    },

    create: function create(data, cb) {
      $http.post('' + API_URL + '/people.json', data).success(cb);
    },

    update: function update(id, data, cb) {
      $http.put('' + API_URL + '/people/' + id + '.json', data).success(cb);
    },

    destroy: function destroy(id, cb) {
      $http['delete']('' + API_URL + '/people/' + id + '.json').success(cb);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hc3NldHMvcGVvcGxlL3BlcnNvbi5mYWN0b3J5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxDQUNKLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUUxQixPQUFPLENBQUMsUUFBUSxFQUFFLFVBQVUsS0FBSyxFQUFFLE9BQU8sRUFBRTtBQUMzQyxTQUFPO0FBQ0wsVUFBTSxFQUFBLGdCQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUU7QUFDYixXQUFLLENBQ0YsR0FBRyxNQUFJLE9BQU8sZ0JBQVcsRUFBRSxXQUFRLENBQ25DLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNoQjs7QUFFRCxVQUFNLEVBQUEsZ0JBQUMsRUFBRSxFQUFFO0FBQ1QsV0FBSyxDQUNGLEdBQUcsTUFBSSxPQUFPLGtCQUFlLENBQzdCLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNoQjs7QUFFRCxVQUFNLEVBQUEsZ0JBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNmLFdBQUssQ0FDRixJQUFJLE1BQUksT0FBTyxtQkFBZ0IsSUFBSSxDQUFDLENBQ3BDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNoQjs7QUFFRCxVQUFNLEVBQUEsZ0JBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDbkIsV0FBSyxDQUNGLEdBQUcsTUFBSSxPQUFPLGdCQUFXLEVBQUUsWUFBUyxJQUFJLENBQUMsQ0FDekMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2hCOztBQUVELFdBQU8sRUFBQSxpQkFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ2QsV0FBSyxVQUNJLE1BQUksT0FBTyxnQkFBVyxFQUFFLFdBQVEsQ0FDdEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2hCO0dBQ0YsQ0FBQTtDQUNGLENBQUMsQ0FBQyIsImZpbGUiOiJzcmMvYXNzZXRzL3Blb3BsZS9wZXJzb24uZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXJcbiAgLm1vZHVsZSgnZmFjZWJvb2stcHJvamVjdCcpXG5cbiAgLmZhY3RvcnkoJ1BlcnNvbicsIGZ1bmN0aW9uICgkaHR0cCwgQVBJX1VSTCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRPbmUoaWQsIGNiKSB7XG4gICAgICAgICRodHRwXG4gICAgICAgICAgLmdldChgJHtBUElfVVJMfS9wZW9wbGUvJHtpZH0uanNvbmApXG4gICAgICAgICAgLnN1Y2Nlc3MoY2IpO1xuICAgICAgfSxcblxuICAgICAgZ2V0QWxsKGNiKSB7XG4gICAgICAgICRodHRwXG4gICAgICAgICAgLmdldChgJHtBUElfVVJMfS9wZW9wbGUuanNvbmApXG4gICAgICAgICAgLnN1Y2Nlc3MoY2IpO1xuICAgICAgfSxcblxuICAgICAgY3JlYXRlKGRhdGEsIGNiKSB7XG4gICAgICAgICRodHRwXG4gICAgICAgICAgLnBvc3QoYCR7QVBJX1VSTH0vcGVvcGxlLmpzb25gLCBkYXRhKVxuICAgICAgICAgIC5zdWNjZXNzKGNiKTtcbiAgICAgIH0sXG5cbiAgICAgIHVwZGF0ZShpZCwgZGF0YSwgY2IpIHtcbiAgICAgICAgJGh0dHBcbiAgICAgICAgICAucHV0KGAke0FQSV9VUkx9L3Blb3BsZS8ke2lkfS5qc29uYCwgZGF0YSlcbiAgICAgICAgICAuc3VjY2VzcyhjYik7XG4gICAgICB9LFxuXG4gICAgICBkZXN0cm95KGlkLCBjYikge1xuICAgICAgICAkaHR0cFxuICAgICAgICAgIC5kZWxldGUoYCR7QVBJX1VSTH0vcGVvcGxlLyR7aWR9Lmpzb25gKVxuICAgICAgICAgIC5zdWNjZXNzKGNiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuIl19
